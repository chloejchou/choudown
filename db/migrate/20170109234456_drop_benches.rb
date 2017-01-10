class DropBenches < ActiveRecord::Migration
  def change
    drop_table :benches
  end
end
