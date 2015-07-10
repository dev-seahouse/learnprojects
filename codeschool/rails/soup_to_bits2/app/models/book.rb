class Book < ActiveRecord::Base

	scope :finished , ->{where('finished_on IS NOT NULL')}
	scope :recent , ->{where('finished_on > ?',2.days.ago)}
	#scope :search, ->(keyword){ where(title: keyword) if keyword.present?}
	scope :search, ->(keyword){ where('keywords LIKE?',"%#{keyword.downcase}%")}
	# % means wild card
	before_save :set_keywords



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

	protected
		def set_keywords
			#self.keywords = [title,author, description].map{|p| p.downcase}
			self.keywords = [title,author,description].map(&:downcase).join(' ')
			#go through each item in the array and set downcase to each of them
		end
end
