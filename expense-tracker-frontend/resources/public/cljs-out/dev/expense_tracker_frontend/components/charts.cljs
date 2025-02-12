(ns expense-tracker-frontend.components.charts
  (:require [ajax.core :refer [POST GET]]
            [reagent.core :as reagent :refer [atom cursor create-class]]
            [reagent.dom :as rdom]
            [expense-tracker-frontend.state :refer [app-state selected-month selected-year]]))

;; Report Page - Pie Chart
(defn generate-colors [num]
  (let [colors ["#FF6384" "#36A2EB" "#FFCE56" "#4BC0C0" "#9966FF" "#FF9F40" "#E7E9ED"]]
    (take num (cycle colors))))

(defn pie-chart []
  (create-class
   {:component-did-mount
    (fn [this]
      (let [report (:report @app-state)
            debit-split (:debit_percentage_split report)
            labels (clj->js (map :subtype debit-split))
            data (clj->js (map :percentage debit-split))
            colors (clj->js (generate-colors (count debit-split)))
            ctx (.getContext (.getElementById js/document "pieChart") "2d")]

        (js/Chart. ctx
                   (clj->js {:type "pie"
                             :data {:labels labels
                                    :datasets [{:label "Debit Expense Split"
                                                :data data
                                                :backgroundColor colors
                                                :hoverBackgroundColor colors}]}}))))

    :reagent-render
    (fn []
      [:div
       [:h4 "Debit Expense Split"]
       [:canvas {:id "pieChart" :width "300" :height "300"}]])}))


;; Report Page - Line Chart
(def month-names { "1" "Jan" "2" "Feb" "3" "Mar" "4" "Apr" "5" "May" "6" "Jun"
                   "7" "Jul" "8" "Aug" "9" "Sep" "10" "Oct" "11" "Nov" "12" "Dec" })

(defn line-chart []
  (create-class
   {:component-did-mount
    (fn [this]
      (let [report (:report @app-state)
            ctx (.getContext (.getElementById js/document "lineChart") "2d")
            month-keys (sort (keys (:monthly_credit_debit report)))  
            months (clj->js (map #(get month-names (name %)) month-keys))
            credit-data (clj->js (map #(get-in (:monthly_credit_debit report) [% :Credit] 0) month-keys))
            debit-data (clj->js (map #(get-in (:monthly_credit_debit report) [% :Debit] 0) month-keys))]

        (js/Chart. ctx
                   (clj->js {:type "line"
                             :data {:labels months
                                    :datasets [{:label "Credit"
                                                :data credit-data
                                                :borderColor "rgba(75, 192, 192, 1)"
                                                :fill false}
                                               {:label "Debit"
                                                :data debit-data
                                                :borderColor "rgba(255, 99, 132, 1)"
                                                :fill false}]}
                             :options {:responsive true
                                       :scales {:x {:title {:display true
                                                            :text "Month"}
                                                    :ticks {:autoSkip false}} 
                                                :y {:beginAtZero true}}}}))))

    :reagent-render
    (fn []
      [:div
       [:h4 "Monthly Credit vs Debit Trends"]
       [:canvas {:id "lineChart" :width "300" :height "300"}]])}))
