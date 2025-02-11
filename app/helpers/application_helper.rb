module ApplicationHelper
  def flash_messages
    flash.each do |message_type, message|
      concat(content_tag(:div, message, class: "alert alert-#{message_type}")) + "\n"
    end
  end
end