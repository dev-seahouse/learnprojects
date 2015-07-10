class Book < ActiveRecord::Base
	has_many :book_genres
	has_many :genres, through: :book_genres

	scope :finished , ->{where('finished_on IS NOT NULL')}
	scope :recent , ->{where('finished_on > ?',2.days.ago)}
	#scope :search, ->(keyword){ where(title: keyword) if keyword.present?}
	scope :search, ->(keyword){where('keywords LIKE?', "%#{keyword.downcase}%") if keyword.present? }
	#scope :filter, ->(genre_id){ joins(:book_genres).where(book_genres:{genre_id: genre_id}) if genre_id.present?}
	scope :filter, ->(name){ joins(:genres).where('genres.name=?',name) if name.present?}
	#where('book_genres.genre_id=?',genre_id)
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
