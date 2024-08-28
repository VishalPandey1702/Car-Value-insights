# dataconversion.py

def format_input_data(input_data):
    formatted_data = {
        'Name': input_data.get('Name', ''),
        'Location': input_data.get('Location', ''),
        'Fuel_Type': input_data.get('Fuel_Type', ''),
        'Transmission': input_data.get('Transmission', ''),
        'Owner_Type': input_data.get('Owner_Type', ''),
        'Mileage': input_data.get('Mileage', ''),
        'Engine': input_data.get('Engine', ''),
        'Power': input_data.get('Power', ''),
        'Year': input_data.get('Year', ''),
        'Kilometers_Driven': input_data.get('Kilometers_Driven', 0),
        'Seats': input_data.get('Seats', 0)
    }
    return formatted_data
