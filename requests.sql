-- Active: 1665109333500@@127.0.0.1@27017@warehouse_receipts_development
-- db('warehouse_receipts_development').collection('plants').find({}).limit(100).toArray()

db('warehouse_receipts_development').collection('plants').drop()
