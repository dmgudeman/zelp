json.extract! @review, :id, :author_id, :business_id, :rating, :body, :created_at, :updated_at
json.photoUrl @review.photo.attached? ? url_for(@review.photo) : nil
# json.photoUrl review.photo.attached? ? review.photo.url : nil
