// MIGRATION_INDEX_LOG.js

window.MIGRATION_INDEX_LOG = {
  "tables": {
    "MIGRATION_INDEX_LOG": {
      "description": "This table temporarily stores list of indices created during migration. Do not use this table to store any other data.",
      "columns": {
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
          "info": "Date and time of data insertion."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the user who updated the data."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of data update."
},
        "OWNER": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "INDEX_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};