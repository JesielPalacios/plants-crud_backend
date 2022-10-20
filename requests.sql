-- Active: 1666291259625@@127.0.0.1@27017@warehouse_receipts_development
-- Active: 1664209392020@@127.0.0.1@27017@warehouse_receipts_development
-- db('warehouse_receipts_development').collection('plants').find({}).limit(100).toArray()

db('warehouse_receipts_development').collection('plants').drop()
-- db('warehouse_receipts_development').collection('photos').drop()
