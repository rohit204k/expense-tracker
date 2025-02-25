(ns expense-tracker-frontend.core
  (:require
   [goog.dom :as gdom]
   [reagent.dom :as rdom]
   [expense-tracker-frontend.state :refer [app-state]]
   [expense-tracker-frontend.pages.auth :refer [login-page registration-page]]
   [expense-tracker-frontend.pages.dashboard :refer [dashboard-page]]))

;; Test Function
(defn multiply [a b] (* a b))

;; Main page routing
(defn current-page []
  (case (:page @app-state)
    "login"      [login-page]
    "register"   [registration-page]
    "dashboard"  [dashboard-page]
    [login-page]))

;; -----------------------------
;; Initialize App

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this in src/expense_tracker_frontend/core.cljs and watch it change!"]])

(defn mount [el]
  (rdom/render [current-page] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)