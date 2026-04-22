// TRANSACTIONAL_EVENT.js

window.TRANSACTIONAL_EVENT = {
  "tables": {
    "TRANSACTIONAL_EVENT": {
      "columns": {
        "TRANSACTIONAL_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "TRANSACTIONAL_EVENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE"
},
        "TRACKING_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "NONE",
                    "AUDIT"
          ]
},
        "TRACKING_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION"
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
      "fk_tables": [
        "AUDIT_TRAIL",
        "INVOICE_TR_EVENT_CONTACT",
        "JOB_TR_EVENT_CONTACT",
        "OB_TR_EVENT_CONTACT",
        "ORDER_RELEASE_TR_EVENT_CONTACT",
        "QUOTE_TR_EVENT_CONTACT",
        "REPORT",
        "SHIPMENT_TR_EVENT_CONTACT",
        "SHIP_GROUP_TR_EVENT_CONTACT",
        "TRANSACTIONAL_EVENT_CONTACT",
        "TRANSACTIONAL_EVENT_INVPARTY",
        "TRANSACTIONAL_EVENT_SERVPROV",
        "TRANSACTIONAL_EVENT_SUBJECT"
]
    }
  }
};