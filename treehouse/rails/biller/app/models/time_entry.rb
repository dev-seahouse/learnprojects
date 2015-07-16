class TimeEntry < AccountEntry

	belongs_to :employee
	# There is no time entry table in the database
end
