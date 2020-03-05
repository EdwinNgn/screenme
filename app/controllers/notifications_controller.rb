class NotificationsController < ApplicationController
  def readall
    @user = current_user
    @user.unread_notifications.each { |notification| notification.mark_as_read }

    respond_to do |format|
      format.html { redirect_to root_path }
      format.js
    end
  end
end
