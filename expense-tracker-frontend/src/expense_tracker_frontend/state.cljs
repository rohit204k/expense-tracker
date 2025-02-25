(ns expense-tracker-frontend.state
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce app-state 
  (atom {:page "login"
         :token nil                
         :username nil
         :expenses []              
         :report {}                
         :dashboard-page "add-expense"}))

;; Stores the selected month & year
(defonce selected-month (atom (str (inc (.getMonth (js/Date.))))))
(defonce selected-year (atom (str (.getFullYear (js/Date.)))))
