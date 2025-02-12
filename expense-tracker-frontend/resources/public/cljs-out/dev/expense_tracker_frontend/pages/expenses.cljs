(ns expense-tracker-frontend.pages.expenses
  (:require [ajax.core :refer [POST GET]]
            [reagent.core :as reagent :refer [atom cursor create-class]]
            [expense-tracker-frontend.api :refer [fetch-expenses add-expense-api]]
            [expense-tracker-frontend.state :refer [app-state selected-month selected-year]]))


;; Add Expense Page
(defn add-expense-page []
  (let [description (atom "")
        amount (atom "")
        expense-type (atom "")
        sub-type (atom "")
        date (atom "")]
    (fn []
      [:div
       [:h3 "Add Expense"]
       [:div
         [:label "Description: "]
         [:input {:type "text"
                  :value @description
                  :on-change #(reset! description (-> % .-target .-value))
                  :require true}]]
       [:div
         [:label "Amount: "]
         [:input {:type "number"
                  :value @amount
                  :on-change #(reset! amount (-> % .-target .-value))
                  :require true}]]
       [:div
         [:label "Category: "]
         [:select {:value @expense-type
                   :on-change #(reset! expense-type (-> % .-target .-value))
                   :require true}
          [:option {:value ""} "Select"]
          [:option {:value "Debit"} "Debit"]
          [:option {:value "Credit"} "Credit"]]]
        
        (let [sub-type-options (if (= @expense-type "Credit")
                                ["Salary"]
                                ["Groceries" "Medicines" "Entertainment" "Rent" "Utilities" "Shopping" "Girlfriend"])]
         [:div
          [:label "Sub-Category: "]
          [:select {:value @sub-type
                    :on-change #(reset! sub-type (-> % .-target .-value))
                    :require true}
           [:option {:value ""} "Select"]
           (for [option sub-type-options]
             ^{:key option} [:option {:value option} option])]])

       (let [today (.toISOString (js/Date.))]
         [:div
          [:label "Date: "]
          [:input {:type "date"
                   :value @date
                   :max (subs today 0 10)
                   :on-change #(reset! date (-> % .-target .-value))
                   :require true}]])
       [:button {:on-click (fn []
                              (add-expense-api {:description @description
                                                :amount (js/parseFloat @amount)
                                                :type @expense-type
                                                :subtype @sub-type
                                                :date @date})
                              (reset! description "")
                              (reset! amount "")
                              (reset! date ""))}
        "Add Expense"]])))

;; Expenses List Page
(defn expenses-page []
  (let [expenses (:expenses @app-state)]
    [:div {:class "expenses-container"}
     [:h3 "Expenses List"]
     (if (empty? expenses)
       [:p "No expenses found."]
       [:table {:class "expenses-table"}
         [:thead
          [:tr
           [:th "Date"]
           [:th "Description"]
           [:th "Amount"]
           [:th "Category"]
           [:th "Sub-Category"]
           ]]
         [:tbody
          (for [{:keys [description amount type subtype date]} expenses]
            ^{:key (str description date)}
            [:tr
             [:td date]
             [:td description]
             [:td amount]
             [:td type]
             [:td subtype]
             ])]])
     [:button {:class "refresh-btn"
               :on-click fetch-expenses}
      "Refresh Table"]]))

