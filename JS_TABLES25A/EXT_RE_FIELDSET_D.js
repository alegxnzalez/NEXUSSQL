// EXT_RE_FIELDSET_D.js

window.EXT_RE_FIELDSET_D = {
  "tables": {
    "EXT_RE_FIELDSET_D": {
      "columns": {
        "EXT_RE_FIELDSET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXT_RE_FIELDSET",
          "info": "Identifies the owning fieldset "
        },
        "RATE_GEO_COST_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "Identifies the Rate Basis Item (RBI) "
        },
        "RATE_GEO_COST_OPERAND_SEQ": {
          "type": "NUMBER()",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "Field needed to complete foreign key into rate_geo_cost_operand. "
        },
        "POSITION": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Ordinal position of field within the fieldset when generating output stream "
        },
        "FIELD_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When generating a fieldset output stream with a type of fixed-width, this field can override the default field width value defined in rate_geo_cost_operand "
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the release to which the record is added."
        }
      },
      "fk_tables": []
    }
  }
};
