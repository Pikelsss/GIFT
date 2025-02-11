class CreateGiftItems < ActiveRecord::Migration[7.1]
  def change
    create_table :gift_items do |t|

      t.timestamps
    end
  end
end
