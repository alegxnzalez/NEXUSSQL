// TENDER_COLLAB_INBOUND_ERROR.js

window.TENDER_COLLAB_INBOUND_ERROR = {
  "tables": {
    "TENDER_COLLAB_INBOUND_ERROR": {
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
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "CONDITIONAL_BOOKING_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "SERVPROV_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "UOM_CODE": {
          "type": "VARCHAR2(55)",
          "nullable": true
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LOCATION_LONGNAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LOCATION_ALIAS": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LOCATION_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_QUALIFIER"
},
        "TIME_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_QUALIFIER"
},
        "TRANSPORT_STAGE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_STAGE_QUALIFIER"
},
        "REMARKS": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "VALIDATED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SENDER_TRANSMISSION_NO": {
          "type": "VARCHAR2(200)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};