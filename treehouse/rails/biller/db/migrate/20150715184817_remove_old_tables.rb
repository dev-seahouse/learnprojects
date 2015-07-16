class RemoveOldTables < ActiveRecord::Migration
  def up
  	Customer.all.each do |c|
  		Account.new(name: c.name, about: c.about)
  	end

  	Employee.all.each do |e|
  		Account.new(name: e.name, about: e.email)
  	end

  	drop_table :customers
  	drop_table :employees
  end

  def down
  end
end
