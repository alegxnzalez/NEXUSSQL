// WEIGHT_BREAK_PROFILE.js

window.WEIGHT_BREAK_PROFILE = {
  "tables": {
    "WEIGHT_BREAK_PROFILE": {
      "description": "List of values for weight profile.  Each profile is then associated to one or more weight breaks in the WEIGHT_BREAK table.  The weight break table holds the discounts a carrier may give to a customer who is shipping large quantities. Ex: Of a Weight Profile:  ABC Carriers. Ex of  a weight break:   100-200 lbs.  $2.00 /lb                                    201-300 lbs.  $1.75 /lb",
      "columns": {
        "WEIGHT_BREAK_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "WEIGHT_BREAK_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
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
        "RATE_OFFERING",
        "WEIGHT_BREAK"
]
    }
  }
};