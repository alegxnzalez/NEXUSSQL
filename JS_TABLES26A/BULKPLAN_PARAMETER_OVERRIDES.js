// BULKPLAN_PARAMETER_OVERRIDES.js

window.BULKPLAN_PARAMETER_OVERRIDES = {
  "tables": {
    "BULKPLAN_PARAMETER_OVERRIDES": {
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
        "BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BULK_PLAN",
          "info": "Global identifier generated for each call to the bulk plan process."
},
        "PARAMETER_OVERRIDES": {
          "type": "CLOB",
          "nullable": true,
          "info": "Stores parameter overrides for the parameter set used in the bulk plan."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted.  The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly). Valid values are 1-4."
}
      },
      "fk_tables": []
    }
  }
};