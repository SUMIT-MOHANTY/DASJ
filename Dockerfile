FROM python:3.10-slim
WORKDIR /app
COPY backend/ /app/
RUN pip install --no-cache-dir -r requirements.txt
ENV DB_URL=postgresql://user:password@localhost:5432/dbname
ENV JWT_SECRET=ReplaceWithSecureSecret
EXPOSE 8000
ENTRYPOINT ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
