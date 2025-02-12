(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer [run-tests]]
            [cljs-test-display.core] [expense-tracker-frontend.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote expense-tracker-frontend.core-test))