;; This test runner is intended to be run from the command line
(ns expense-tracker-frontend.test-runner
  (:require
    ;; require all the namespaces that you want to test
    [expense-tracker-frontend.core-test]
    [figwheel.main.testing :refer [run-tests-async]]))

(defn -main [& args]
  (run-tests-async 5000))
