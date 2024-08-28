

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LinearRegression

# Load your dataset
df = pd.read_csv('dataset.csv')

def Model(df):
    df = df.drop(['New_Price', 'Unnamed: 0'], axis=1)
    df = df.dropna()

    object_columns = df.select_dtypes(include=['object'])
    object_column_names = object_columns.columns

    label_encoder = LabelEncoder()
    encoded_df = df[object_column_names].apply(lambda col: label_encoder.fit_transform(col))

    numerical_columns = df.select_dtypes(exclude=['object'])
    processed_df = pd.concat([encoded_df, numerical_columns], axis=1)

    X = processed_df.drop(columns=['Price'])
    y = processed_df['Price']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = LinearRegression()
    model.fit(X_train, y_train)

    return model, label_encoder, object_column_names

# Initialize the model
model, label_encoder, object_column_names = Model(df)

def predict(input_data):
    input_df = pd.DataFrame(input_data, index=[0])
    print(f"Input data before encoding: \n{input_df}")

    object_columns = input_df.select_dtypes(include=['object'])
    encoded_input_df = input_df.copy()
    for col in object_column_names:
        if col in encoded_input_df:
            encoded_input_df[col] = label_encoder.fit_transform(encoded_input_df[col])

    print(f"Input data after encoding: \n{encoded_input_df}")

    numerical_columns = input_df.select_dtypes(exclude=['object'])
    processed_input_df = pd.concat([encoded_input_df, numerical_columns], axis=1)

    print(f"Processed input data: \n{processed_input_df}")

    predicted_price = model.predict(processed_input_df)
    return predicted_price[0]
