class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.string :about
      t.string :email
      t.integer :balance

      t.timestamps null: false
    end
  end
end
