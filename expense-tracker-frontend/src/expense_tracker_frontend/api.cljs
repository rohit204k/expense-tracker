(ns expense-tracker-frontend.api
  (:require [ajax.core :refer [POST GET]]
            [expense-tracker-frontend.state :refer [app-state selected-month selected-year]]))

(def base-url "http://localhost:8000")

(defn register-user [username password]
  (POST (str base-url "/register")
        {:params {:username username :password password}
         :format :json
         :response-format :json
         :handler (fn [response]
                    (js/alert "Registration successful. Please login.")
                    (swap! app-state assoc :page "login"))
         :error-handler (fn [error]
                          (js/alert (str "Registration failed: " (get-in error [:response :detail]))))}))

(defn login-user [username password]
  (POST (str base-url "/login")
        {:params {:username username :password password}
         :format :json
         :response-format :json
         :handler (fn [response]
                    (swap! app-state assoc
                           :token (get response "token")
                           :username username
                           :page "dashboard"
                           :dashboard-page "add-expense"))
         :error-handler (fn [error]
                          (js/alert "Login failed: Invalid credentials"))}))

(defn add-expense-api [expense]
  (POST (str base-url "/expense")
        {:params expense
         :format :json
         :response-format :json
         :headers {"Authorization" (str "Bearer " (:token @app-state))}
         :handler (fn [response]
                    (js/alert "Expense added successfully"))
         :error-handler (fn [error]
                          (js/alert "Failed to add expense"))}))

(defn fetch-expenses []
  (GET (str base-url "/expenses")
       {:response-format :json
        :keywords? true
        :headers {"Authorization" (str "Bearer " (:token @app-state))}
        :handler (fn [response]
                   (swap! app-state assoc :expenses (:expenses response)))
        :error-handler (fn [error]
                         (js/alert "Failed to fetch expenses"))}))


(defn fetch-report [on-success]
  (let [year (js/parseInt @selected-year)
        month (js/parseInt @selected-month)]
    (GET (str base-url "/report")
         {:headers {"Authorization" (str "Bearer " (:token @app-state))}
          :response-format :json
          :keywords? true
          :params {:year year :month month}
          :handler (fn [response]
                     (swap! app-state assoc :report response)
                     (when on-success (on-success)))
          :error-handler (fn [error]
                           (println "Fetch Report Error:" error)
                           (js/alert "Failed to fetch report data"))})))