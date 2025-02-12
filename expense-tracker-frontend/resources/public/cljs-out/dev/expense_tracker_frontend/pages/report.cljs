(ns expense-tracker-frontend.pages.report
  (:require [ajax.core :refer [POST GET]]
            [expense-tracker-frontend.api :refer [fetch-report]]
            [expense-tracker-frontend.components.charts :refer [pie-chart line-chart]]
            [expense-tracker-frontend.state :refer [app-state selected-month selected-year]]))


;; Report Page
(defonce chart-refresh (atom false))
(defn toggle-chart-refresh []
  (swap! chart-refresh not))

(defn report-page []
  (fn []
    [:div {:class "reports-container"}
     [:h3 "Monthly Expense Report"]

     ;; Month & Year Selection
     [:div {:class "report-form"}
      [:label "Select Month: "]
      [:select {:value @selected-month
                :on-change #(reset! selected-month (-> % .-target .-value))}
       (for [m (range 1 13)]
         ^{:key m} [:option {:value (str m)} (str m)])]

      [:label " Select Year: "]
      [:input {:type "number"
               :value @selected-year
               :on-change #(reset! selected-year (-> % .-target .-value))}]]
     
     [:button {:on-click (fn [] (fetch-report toggle-chart-refresh))} "Fetch Report"]

     ;; Show Total Monthly Expense
     (if (:report @app-state)
       [:h3 (str "Total Expenses for the Month: $" (:current_month_total (:report @app-state)))])

     (if (:report @app-state)
       [:div {:class "chart-container"}
        [:div {:class "chart-box"} [pie-chart]]
        [:div {:class "chart-box"} [line-chart]]]
       [:p "No report data available."])]))
