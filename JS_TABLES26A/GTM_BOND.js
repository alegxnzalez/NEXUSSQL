// GTM_BOND.js

window.GTM_BOND = {
  "tables": {
    "GTM_BOND": {
      "description": "This table stores the bond data.",
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
        "GTM_BOND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "This is the bond identifier Gid for Gtm system."
},
        "GTM_BOND_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This is the bond identifier Xid for Gtm system."
},
        "GTM_BOND_NUMBER": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "info": "This is the bond number provided by the government."
},
        "GTM_PRIOR_BOND_NUMBER": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "This is the previous bond number related to current bond."
},
        "GTM_BOND_TYPE1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "This is the type of bond."
},
        "GTM_BOND_CODE1": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "This is the primary bond code."
},
        "GTM_BOND_TYPE2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "This will always be same as first bond type but provided additionally in database to support foreign key constraint for gtm_second_bond_code."
},
        "GTM_BOND_CODE2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "This is the additional bond code applicable for selected bond type."
},
        "IS_SUPPLEMENTAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This identifies whether the bond is supplemental."
},
        "IS_EXTENSION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This identifies whether the bond is an extension."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "This is the date from when bond will be applicable."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "This is the date when bond will expire."
},
        "LIABILITY_LMT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This is the liability limit of the bond."
},
        "LIABILITY_LMT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This is the liability limit of the bond in default currency."
},
        "LIABILITY_LMT_CURRENCY_GID": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "This is the currency unit for the liability limit of the bond."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "This is the description of the bond."
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
},
        "EXECUTION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "This is the date when the bond is approved or sold."
}
      },
      "fk_tables": [
        "GTM_BOND_INV_PARTY",
        "GTM_BOND_PORT",
        "GTM_BOND_REFNUM",
        "GTM_BOND_REMARK",
        "GTM_TRANSACTION",
        "GTM_TRANSACTION_LINE"
]
    }
  }
};