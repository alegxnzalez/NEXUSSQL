// INVOICE_SHIPMENT.js

window.INVOICE_SHIPMENT = {
  "tables": {
    "INVOICE_SHIPMENT": {
      "description": "Contains the shipment that is associated with an invoice.",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice."
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT",
          "info": "The GID for the shipment."
},
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
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "S_SHIP_UNIT",
          "info": "The GID for the shipment ship unit."
},
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The shipment ship unit line number."
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number."
},
        "TRACKING_NUMBER": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "Tracking number"
},
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Line item sequence number."
},
        "SHIP_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_GROUP",
          "info": "This column is to generate invoice based on shipment group. Here the shipment group can have only one  invoice associated to it."
}
      },
      "fk_tables": []
    }
  }
};