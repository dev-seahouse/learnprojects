class Customer < Account
	has_many :time_entries
end

# With this, it is possible to do @customer.time_entries to view what has been charged against them
# @customer.account_entries contains a mix of TimeEntries and Account entries