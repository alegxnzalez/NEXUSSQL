// TENDER_COLLAB_SG_SERVPROV.js

window.TENDER_COLLAB_SG_SERVPROV = {
  "tables": {
    "TENDER_COLLAB_SG_SERVPROV": {
      "description": "This table contains the information for various service providers to whom the ship group tender collaboration record was sent.",
      "columns": {
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
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider who received the ship group tender."
},
        "TRANSACTION_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "The date of the ship group tender collaboration either tender sent, accept, withdrawal, etc ."
},
        "ACCEPTANCE_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "A",
                    "D"
          ],
          "info": "Tender acceptance status for a ship group. Values are A (Tender Accepted), D (Tender Declined)"
},
        "RESPONSE_COM_METHOD_GID": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "The communication method used for the collaboration."
},
        "DECLINE_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "if declined the reason for ship group tender decline."
},
        "DISPATCH_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The id of the contact of the service provider."
},
        "PICKUP_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Original value is from ship group, if servprov changes pickup time, it is stored in this column."
},
        "TENDER_COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "Record the communication method used in tender notification."
},
        "RESPONSE_TIME": {
          "type": "DATE",
          "nullable": true
},
        "SHIP_GROUP_TENDER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SG",
          "info": "A unique identifier to identify the ship group tender."
},
        "RESPONDING_GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The gluser responding in the collaboration"
}
      },
      "fk_tables": [
        "SERVPROV_TENDER_SG_EQUIPMENT",
        "SERVPROV_TENDER_SG_REFNUM",
        "SERVPROV_TENDER_SG_REMARK"
]
    }
  }
};