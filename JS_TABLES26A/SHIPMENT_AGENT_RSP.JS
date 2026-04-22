// SHIPMENT_AGENT_RSP.js

window.SHIPMENT_AGENT_RSP = {
  "tables": {
    "SHIPMENT_AGENT_RSP": {
      "description": "This table keeps the shipping agent contacts and their responsible shipments relationship and their approval/decline status for the shipments.",
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT",
          "info": "One of the primary keys."
},
        "SHIPPING_AGENT_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPPING_AGENT_CONTACT",
          "info": "One of the primary keys."
},
        "JOB_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "JOB",
          "info": "Indicates which Job the shipment is in."
},
        "APPROVED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "O",
                    "A",
                    "D"
          ],
          "info": "A:APPROVED, D:DECLINED, O:OUTSTANDING"
},
        "ADJUSTMENT_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ADJUSTMENT_REASON",
          "info": "If APPROVED field is D, this field is required."
},
        "ADJUSTMENT_TEXT": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "If APPROVED field is D, this field is optional to keep the extra info about the declined shipment."
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