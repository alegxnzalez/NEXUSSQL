// GTM_TRANSACTION_REFERENCE.js

window.GTM_TRANSACTION_REFERENCE = {
  "tables": {
    "GTM_TRANSACTION_REFERENCE": {
      "description": "This table contains the details of the associated shipments or order releases and their respective data configurations of a trade transaction.",
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Uniquely identifies the association of trade transaction with the related object."
},
        "GTM_TRANSACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION",
          "info": "The GID for the GTM trade transaction."
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "Identifies the data query type of the object."
},
        "TRANSACTION_REF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Gives the Shipment or Order Release ID based on the data query type."
},
        "IS_PRIMARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Gives the primary shipment among the multiple shipments. Takes the values Y/N."
},
        "GTM_DT_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "Gives the data configuration used to create/copy data from the related object to trade transaction."
}
      },
      "fk_tables": []
    }
  }
};