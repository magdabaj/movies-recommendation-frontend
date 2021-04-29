import * as Yup from 'yup'

class CustomYupString extends Yup.string {
  matchesOne(msg, ...regularExpression) {
    return this.test({
      name: 'matchesOne',
      exclusive: true,
      message: msg,
      params: {
        regularExpression,
      },
      // eslint-disable-next-line object-shorthand
      test: function test(value) {
        const regExs = this.resolve(regularExpression)

        let pass = false
        regExs.forEach(regex => {
          if (regex.test(value)) pass = true
        })
        return pass
      },
    })
  }

  equalTo(ref, msg) {
    return this.test({
      name: 'equalTo',
      exclusive: false,
      message: msg,
      params: {
        reference: ref.path,
      },
      test(value) {
        return value === this.resolve(ref)
      },
    })
  }
}

export default new CustomYupString()
