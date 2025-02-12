(ns expense-tracker-frontend.pages.dashboard
  (:require [reagent.core :refer [cursor]]
            [expense-tracker-frontend.state :refer [app-state]]
            [expense-tracker-frontend.pages.expenses :refer [expenses-page add-expense-page]]
            [expense-tracker-frontend.pages.report :refer [report-page toggle-chart-refresh]]
            [expense-tracker-frontend.api :refer [fetch-report fetch-expenses]]))

;; Dashboard Page – includes navigation among the subpages
(defn dashboard-page []
  (let [sub-page (cursor app-state [:dashboard-page])]
    (fn []
      [:div {:class "dashboard-container"}
        [:div {:class "logout-btn-container"}
          [:button {:class "logout-btn"
                 :on-click #(swap! app-state assoc :page "login"
                                     :token nil :username nil)} "Logout"]]
        [:h2 (str "Welcome, " (:username @app-state))]
       
        [:hr]

        [:div {:class "dashboard-buttons"}
        [:button {:class "add-expense-btn"
                  :on-click #(swap! app-state assoc :dashboard-page "add-expense")} 
         "Add Expense"]

        [:button {:class "expenses-btn"
                  :on-click #(do (swap! app-state assoc :dashboard-page "expenses")
                                 (fetch-expenses))} 
         "Expenses List"]

        [:button {:class "report-btn"
                  :on-click #(do
                               (swap! app-state assoc :dashboard-page "report")
                               (fetch-report toggle-chart-refresh))} 
         "Monthly Report"]]

       [:div
        (case @sub-page
          "add-expense" [add-expense-page]
          "expenses"    [expenses-page]
          "report"      [report-page]
          [:div "Select an option"])]])))
