// SKU_EVENT.js

window.SKU_EVENT = {
  "tables": {
    "SKU_EVENT": {
      "description": "SKU event.",
      "columns": {
        "SKU_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "SKU event id."
},
        "SKU_EVENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "SKU event xid."
},
        "SKU_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "foreign_key": "SKU",
          "info": "SKU id."
},
        "BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Event status code id."
},
        "BS_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE",
          "info": "Event reason code id."
},
        "EVENT_DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the event."
},
        "EVENT_DATE": {
          "type": "DATE",
          "nullable": true
},
        "XML_DOC_STATUS": {
          "type": "CLOB",
          "nullable": true,
          "info": "Description of the event in an XML document."
},
        "BS_RESPONSIBLE_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_RESPONSIBLE_PARTY",
          "info": "Party responsible for the event."
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
        "SKU_EVENT_QUANTITY",
        "SKU_EVENT_REMARK"
]
    }
  }
};