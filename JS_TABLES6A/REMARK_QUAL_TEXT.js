// REMARK_QUAL_TEXT.js

window.REMARK_QUAL_TEXT = {
  "tables": {
    "REMARK_QUAL_TEXT": {
      "columns": {
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REMARK_QUAL",
          "info": "Refers column remark_qual.remark_qual_gid. "
        },
        "REMARK_QUAL_TEXT_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID. "
        },
        "TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "Text Value."
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
