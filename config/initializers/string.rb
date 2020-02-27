class String
  def tt_id_to_integer
    self.delete("t").to_i
  end
end
