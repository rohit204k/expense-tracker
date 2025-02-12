(ns expense-tracker-frontend.pages.auth
  (:require [reagent.core :as reagent :refer [atom]]
            [expense-tracker-frontend.api :refer [login-user register-user]]
            [expense-tracker-frontend.state :refer [app-state]]))

;; Login Page
(defn login-page []
  (let [username (atom "")
        password (atom "")]
    (fn []
      [:div {:class "auth-container"}
       [:h2 "Login"]
       [:div
         [:label {:class "auth-label"} "Username: "]
         [:input {:class "auth-input" :type "text"
                  :value @username
                  :on-change #(reset! username (-> % .-target .-value))}]]
       [:div
         [:label {:class "auth-label"} "Password: "]
         [:input {:class "auth-input" :type "password"
                  :value @password
                  :on-change #(reset! password (-> % .-target .-value))}]]
       [:button {:class "auth-button" :on-click #(login-user @username @password)}
        "Login"]
       [:p {:class "auth-text"} "Don't have an account? "
        [:a {:class "auth-link" :href "#" :on-click #(swap! app-state assoc :page "register")}
         "Register"]]])))

;; Registration Page
(defn registration-page []
  (let [username (atom "")
        password (atom "")]
    (fn []
      [:div {:class "auth-container"}
       [:h2 "Register"]
       [:div
         [:label {:class "auth-label"} "Username: "]
         [:input {:class "auth-input" :type "text"
                  :value @username
                  :on-change #(reset! username (-> % .-target .-value))}]]
       [:div
         [:label {:class "auth-label"} "Password: "]
         [:input {:class "auth-input" :type "password"
                  :value @password
                  :on-change #(reset! password (-> % .-target .-value))}]]
       [:button {:class "auth-button" :on-click #(register-user @username @password)}
        "Register"]
       [:p {:class "auth-text"} "Already have an account? "
        [:a {:class "auth-link" :href "#" :on-click #(swap! app-state assoc :page "login")}
         "Login"]]])))
