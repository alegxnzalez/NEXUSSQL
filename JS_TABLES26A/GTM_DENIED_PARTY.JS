// GTM_DENIED_PARTY.js

window.GTM_DENIED_PARTY = {
  "tables": {
    "GTM_DENIED_PARTY": {
      "columns": {
        "GTM_DENIED_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_DENIED_PARTY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "FIRST_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "LAST_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "COMPANY_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "VESSEL_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "ADDRESS_LINE_1": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "ADDRESS_LINE_2": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "ADDRESS_LINE_3": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "CITY": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "PROVINCE": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true
},
        "COUNTRY": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "DATE_OF_BIRTH": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "PLACE_OF_BIRTH": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "PASSPORT_NUMBER": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "PASSPORT_ISSUING_COUNTRY": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "PASSPORT_ISSUING_DATE": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "ALT_PASSPORT_NUMBER": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "ALT_PASSPORT_ISSUING_COUNTRY": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "ALT_PASSPORT_ISSUING_DATE": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "DRIVER_LICENSE_NUMBER": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "DRIVER_LICENSE_AUTHORITY": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "CITIZENSHIP": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "NATIONALITY": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "SSN": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "NIT": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "CEDULA": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "DENIAL_CODE": {
          "type": "VARCHAR2(4)",
          "nullable": true
},
        "ENTRY_DATE": {
          "type": "DATE",
          "nullable": true
},
        "ENTRY_ID": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "AGENCY_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_AGENCY_CODE"
},
        "RULING_VOLUME": {
          "type": "VARCHAR2(6)",
          "nullable": true
},
        "RULING_PAGE_NUMBER": {
          "type": "VARCHAR2(6)",
          "nullable": true
},
        "FEDERAL_REGULATION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "NOTES": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "GTM_DATA_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DATA_VERSION"
},
        "IS_INUSE": {
          "type": "VARCHAR2(2)",
          "nullable": true
},
        "SCREENING_STATUS": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "FEDERAL_REGULATION_URL": {
          "type": "VARCHAR2(500)",
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
},
        "COUNTRY_CODE": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "info": "Country Code."
}
      },
      "fk_tables": [
        "GTM_DENIED_PARTY_LINK",
        "GTM_PARTY_SCREENING"
]
    }
  }
};