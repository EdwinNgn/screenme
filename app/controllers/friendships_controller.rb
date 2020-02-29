class FriendshipsController < ApplicationController

  def create
    @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
    friend = User.find(params[:friend_id])
    if @friendship.save
      flash[:notice] = "Added friend."
      redirect_to profile_path(friend)
    else
      flash[:notice] = "Unable to add friend."
      redirect_to profile_path(friend)
    end
  end

  def destroy
    @friendship = current_user.friendships.find_by(friend_id: params[:id])
    friend = User.find(params[:friend_id])
    @friendship.destroy
    flash[:notice] = "Removed friendship."
    redirect_to profile_path(friend)
  end

end
