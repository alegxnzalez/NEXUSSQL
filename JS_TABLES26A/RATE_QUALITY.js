// RATE_QUALITY.js

window.RATE_QUALITY = {
  "tables": {
    "RATE_QUALITY": {
      "description": "A table that is used to factor in the quality of the carrier's services, in determining the best carrier for the job.  A carrier that is cheapest may not be best if they don't tend to deliver shipment on time.",
      "columns": {
        "RATE_QUALITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_QUALITY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "RATE_QUALITY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "ADJUSTMENT_PERCENT": {
          "type": "NUMBER",
          "nullable": false
},
        "ADJUSTMENT_FLAT": {
          "type": "NUMBER",
          "nullable": false
},
        "ADJUSTMENT_FLAT_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "ADJUSTMENT_FLAT in base units."
},
        "CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "ADJUSTMENT_FLAT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
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
        "RATE_GEO",
        "RATE_OFFERING"
]
    }
  }
};