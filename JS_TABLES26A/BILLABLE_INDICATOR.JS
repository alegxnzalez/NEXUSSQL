// BILLABLE_INDICATOR.js

window.BILLABLE_INDICATOR = {
  "tables": {
    "BILLABLE_INDICATOR": {
      "description": "Incudes the values for the billable state of a transaction such as a special service.  Values may include Billable, Not Billable, Requires Approval.  Content is shipped with OTM.",
      "columns": {
        "BILLABLE_INDICATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "BILLABLE_INDICATOR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(50)",
          "nullable": true
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
        "INVOICE_LINEITEM",
        "SHIPMENT_COST",
        "SHIPMENT_SPECIAL_SERVICE",
        "SPECIAL_SERVICE"
]
    }
  }
};