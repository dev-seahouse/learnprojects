class Book < ActiveRecord::Base

	scope :finished , ->{where('finished_on IS NOT NULL')}
	scope :recent , ->{where('finished_on > ?',2.days.ago)}
	scope :search, ->(keyword){ where(title: keyword) if keyword.present?}
	# def self.search(keyword)
	# 	if (keyword.present?)
	# 		where(title: keyword)
	# 	else
	# 		all
	# 	end
	# end
	def finished?
		finished_on.present?
	end
end
