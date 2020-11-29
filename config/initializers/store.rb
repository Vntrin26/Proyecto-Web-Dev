if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_money_back", domain: "your-production-app-here.com"
else
    Rails.application.config.session_store :cookie_store, key: "_money_back"
end