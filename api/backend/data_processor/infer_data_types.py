import pandas as pd

def infer_types(df):
    df = df.infer_objects()
    inferred_types = {}
    for col in df.columns:
        if pd.api.types.is_string_dtype(df[col]):
            df[col] = df[col].astype("category")
        elif pd.api.types.is_numeric_dtype(df[col]):
            df[col] = pd.to_numeric(df[col], errors='coerce')
        elif pd.api.types.is_datetime64_any_dtype(df[col]):
            df[col] = pd.to_datetime(df[col], errors='coerce')
        inferred_types[col] = str(df[col].dtype)
    return inferred_types
