// I_TRANSACTION.js

window.I_TRANSACTION = {
  "tables": {
    "I_TRANSACTION": {
      "description": "The I_TRANSACTION table store all XML transactions which are received by GLog, or sent out of GLog. The I_TRANSACTION table is a child of the I_LOG_TRANSMISSION table. This table contains the one record per transaction in the XML transmissions. See table I_TRANSMISSION for the XML transmission details. Each transaction within the transmission are broken out and stored as individual records.",
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "This is a foreign key from the I_LOG table. The I_TRANSACTION_NO column specifies the transaction to which this log message pertains."
},
        "I_TRANSMISSION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "info": "This is a foreign key to the I_TRANSMISSION table. The I_TRANSMISSION_NO column uniquely identifies the transmission."
},
        "TRANSACTION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "TRANSACTION_CODE provides a code for the type of transaction that was transmitted. Transaction codes include: D I IU U Unknown"
},
        "WRITTEN_BY": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "WRITTEN_BY contains the domain name that logged the transmission."
},
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "STATUS indicates the status of the transaction. Status types include: FRESH New PROCESSED"
},
        "ELEMENT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "ELEMENT_NAME contains the name of the transaction element. These can include: ActualShipment AllocationBase Billing Invoice Item Location Rate Release RemoteQuery ShipmentStatus TenderOffer TenderResponse TransOrder Voucher Xlane"
},
        "PROCESS_GROUP": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "PROCESS_SEQUENCE_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SENDER_TRANSACTION_ID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Specifies the Transaction Number that the sender assigned to the transaction."
},
        "REFERENCE_TRANSACTION_ID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Specifies an alternative Transaction Number that may be assigned by the recipient for the transaction."
},
        "EXTERNAL_STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Specifies the external status for the Transaction.  The external status represents the result of processing at the external system."
},
        "TRANSACTION_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Specifies the type of information stored in the Transmission record.  For example, a record may be stored when an XML is staged via OAQ to support searching via Integration Saved Queries."
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "Data query type of OBJECT_GID, if populated."
},
        "FIRST_ATTEMPT_DATE": {
          "type": "DATE",
          "nullable": true
},
        "LAST_ATTEMPT_DATE": {
          "type": "DATE",
          "nullable": true
},
        "XML_BLOB": {
          "type": "CLOB",
          "nullable": true,
          "info": "The XML_BLOB column specifies the entire XML text of the transmission."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted.  The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly).  Valid values are 1-4."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};