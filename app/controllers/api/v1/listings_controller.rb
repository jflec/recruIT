module Api
    module V1
        class ListingsController < ApplicationController
            def index
                listings = Listing.all
                render json: ListingSerializer.new(listings).serialized_json
            end

            def show
                listing = Listing.find_by(id: params[:id])
                render json: ListingSerializer.new(listing).serialized_json
            end

            def create
                listing = Listing.new(listing_params)
                
                if listing.save
                    render json: ListingSerializer.new(listing).serialized_json
                else
                    render json: { error: listing.error.messages }, status: 422
                end
            end

            def update
                listing = Listing.find_by(id: params[:id])
                
                if listing.update(listing_params)
                    render json: ListingSerializer.new(listing).serialized_json
                else
                    render json: { error: listing.error.messages }, status: 422
                end
            end

            def destroy
                listing = Listing.find_by(id: params[:id])

                if listing.destroy 
                    head :no_content
                else
                    render json: { error: listing.errors.messages}, status: 422
                end

            end

            private

            def listing_params
                params.require(:listing).permit(:title, :description, :recruiter_id, :company, :company_image_url, :company_size, :applicants, :education, :work_experience, :location, :position_type, :experience_level, :compensation, :benefits, skills: [])
            end
        end
    end
end

