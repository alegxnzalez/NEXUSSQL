// DM_RULE.js

window.DM_RULE = {
  "tables": {
    "DM_RULE": {
      "description": "Demurrage Rule provides the capability to define possible rules for the determination of demurrage, detention and storage chargeable days and charges.",
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
        "DM_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "DM_RULE_GID contains the unique identifier for the demurrage rule."
},
        "DM_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Description of the Demurrage Rule"
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "When N, indicates demurrage rule is inactive and should not be used by the algorithm."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Effective Date for this Demurrage Rule"
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Expiration Date for this Auto Approval Rule."
},
        "CR_DM_SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "Criteria to define rules based on demurrage reporting SCAC. In other words the enable rule to be defined specific to each service provider."
},
        "CR_START_SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "Criteria to define rules based on demurrage start event reporting SCAC."
},
        "CR_END_SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "Criteria to define rules based on demurrage end event reporting SCAC."
},
        "CR_EQUIPMENT_MARK_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_MARK_LIST",
          "info": "Criteria to define rules based on equipment marks list."
},
        "CR_EQUIPMENT_NUMBER_LOW": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Criteria to define rules based on equipment number range (low)."
},
        "CR_EQUIPMENT_NUMBER_HIGH": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Criteria to define rules based on equipment number range (high)."
},
        "CR_EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "Criteria to define rules based on equipment group profile."
},
        "CR_FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE",
          "info": "Criteria to define rules based on commodity."
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_OFFERING",
          "info": "Rate Offering linked to demurrage rule. Its helps to define/link demurrage charges."
},
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_GEO",
          "info": "Rate Geo linked to demurrage rule. Its helps to define/link demurrage charges."
},
        "CR_DM_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Criteria to define rules based on demurrage location. One can use region to use the same rule for multiple location, station etc."
},
        "CR_START_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Criteria to define rules based on demurrage start event location. One can use region to use the same rule for multiple start location, station etc."
},
        "CR_END_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Criteria to define rules based on demurrage end event location. One can use region to use the same rule for multiple event location, station etc."
},
        "CR_CONTRACT_NO": {
          "type": "VARCHAR2(240)",
          "nullable": true
},
        "CR_INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL"
},
        "CR_CONTACT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT_PROFILE"
},
        "CR_AAR_CAR_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "AAR Car Type."
},
        "CR_EQUIPMENT_OWNER_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "C",
                    "P"
          ],
          "info": "The Type of Owner for this Equipment Type. C = Carrier Owned, P = Private, null = All."
}
      },
      "fk_tables": [
        "DM_RULE_D",
        "DM_TRANSACTION"
]
    }
  }
};