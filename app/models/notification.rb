class Notification < ApplicationRecord
  belongs_to :sender, class_name: "User"
  belongs_to :receiver, class_name: "User"

  def read?
    self.read == true
  end

  def mark_as_read
    self.read = true
    self.save
  end
end
