// FLEX_COMMODITY_PROFILE_D.js

window.FLEX_COMMODITY_PROFILE_D = {
  "tables": {
    "FLEX_COMMODITY_PROFILE_D": {
      "description": "This table is used to identify user-defined commodities for the items. The commodities can be specified by any or all of the governmental specifications in HTS, SITC, STCC and NMFC.",
      "columns": {
        "FLEX_COMMODITY_PROFILE_D_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number will be the primary key of this table."
},
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "FLEX_COMMODITY_PROFILE",
          "info": "FLEX_COMMODITY_PROFILE_GID contains the unique identifier for the flex commodity profile."
},
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMODITY",
          "info": "COMMODITY_GID contains the unique identifier for the commodity."
},
        "NMFC_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NMFC_CLASS",
          "info": "NMFC_CLASS_GID contains the unique identifier for the National Motor Freight Classification (NMFC)."
},
        "STCC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STCC",
          "info": "STCC_GID contains the unique identifier for the Standard Commodity Code (STCC)."
},
        "HTS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HTS",
          "info": "HTS_GID contains the unique identifier for the Harmonized Tariff System (HTS)."
},
        "SITC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SITC",
          "info": "SITC_GID contains the unique identifier for the Standard International Trade Classification (SITC)."
},
        "USER_DEFINED_COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_DEFINED_COMMODITY",
          "info": "USE_DEFINED_COMMODITY_GID contains the unique identifier for the user-defined commodity."
},
        "EXPORT_HTS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HTS"
},
        "IATA_SCR_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "IATA_SCR_CODE"
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