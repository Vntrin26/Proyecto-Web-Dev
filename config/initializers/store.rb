if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_money_back", domain: "https://money-desk.herokuapp.com/"
else
    Rails.application.config.session_store :cookie_store, key: "_money_back"
end